import React, { useState, useEffect, useContext } from 'react';
import {
  Container, Row, Button,
} from 'react-bootstrap';

import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Header from './Header';
import endpoints from '../constants/endpoints';
import ProjectCard from './projects/ProjectCard';
import FallbackSpinner from './FallbackSpinner';
// import CategorySelector from './CategorySelector';

const styles = {
  containerStyle: {
    marginBottom: 25,
  },
  showMoreStyle: {
    margin: 25,
    fontWeight: 'bold',
  },
};

const Projects = (props) => {
  const theme = useContext(ThemeContext);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { header } = props;
  const [data, setData] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const categories = ['All', 'Website', 'Mobile App', 'Others'];

  const handleSelect = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    fetch(endpoints.projects, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);
  const filteredData = data?.projects.filter((item) => item.category.includes(selectedCategory));
  const numberOfItems = showMore && filteredData ? filteredData.length : 6;
  return (
    <>
      <Header title={header} />
      <div>
        <div>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'light' : 'secondary'}
              onClick={() => handleSelect(category)}
              className="m-2 mb-5"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
      {data ? (
        <div className="section-content-container">
          <Container style={styles.containerStyle}>
            <Row xs={1} sm={1} md={2} lg={3} className="g-4">
              {filteredData.slice(0, numberOfItems).map((project) => (
                <Fade key={project.title}>
                  <ProjectCard project={project} />
                </Fade>
              ))}
            </Row>
            {(filteredData.length > 6 && !showMore) && (
              <Button
                style={styles.showMoreStyle}
                variant={theme.bsSecondaryVariant}
                onClick={() => setShowMore(true)}
              >
                Show more
              </Button>
            )}
          </Container>
        </div>
      ) : (
        <FallbackSpinner />
      )}
    </>
  );
};

Projects.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Projects;

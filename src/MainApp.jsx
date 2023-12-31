import React, { useState, useEffect, Suspense } from 'react';
import FallbackSpinner from './components/FallbackSpinner';
import NavBarWithRouter from './components/NavBar';
import Home from './components/Home';
import endpoints from './constants/endpoints';

function MainApp() {
  const [data, setData] = useState(null);

  const sectionStyle = {
    marginTop: '300px',
  };

  useEffect(() => {
    fetch(endpoints.routes, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <div className="MainApp">
      <NavBarWithRouter />
      <main className="main" style={{ marginTop: '100px' }}>
        <Suspense fallback={<FallbackSpinner />}>
          <Home />
          {data && data.sections.map((section) => {
            const SectionComponent = React.lazy(() => import('./components/' + section.component));
            return (
              <div
                id={section.path.substring(1)}
                key={section.headerTitle}
                style={sectionStyle}
                // style={index !== data.sections.length - 1 ? sectionStyle : undefined}
              >
                <SectionComponent header={section.headerTitle} />
              </div>
            );
          })}
        </Suspense>
      </main>
    </div>
  );
}

export default MainApp;

// import React, { useState, useEffect, Suspense } from 'react';
// import { Switch, Route } from 'react-router-dom';
// import FallbackSpinner from './components/FallbackSpinner';
// import NavBarWithRouter from './components/NavBar';
// import Home from './components/Home';
// import endpoints from './constants/endpoints';

// function MainApp() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch(endpoints.routes, {
//       method: 'GET',
//     })
//       .then((res) => res.json())
//       .then((res) => setData(res))
//       .catch((err) => err);
//   }, []);

//   return (
//     <div className="MainApp">
//       <NavBarWithRouter />
//       <main className="main">
//         <Switch>
//           <Suspense fallback={<FallbackSpinner />}>
//             <Route exact path="/" component={Home} />
//             {data
//               && data.sections.map((route) => {
//         const SectionComponent = React.lazy(() => import('./components/' + route.component));
//                 return (
//                   <Route
//                     key={route.headerTitle}
//                     path={route.path}
//                     component={() => (
//                       <SectionComponent header={route.headerTitle} />
//                     )}
//                   />
//                 );
//               })}
//           </Suspense>
//         </Switch>
//       </main>
//     </div>
//   );
// }

// export default MainApp;

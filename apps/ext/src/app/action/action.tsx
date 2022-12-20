import { Route, Link, Routes } from 'react-router-dom';
import { Quickshares } from '@bingus/quickshares';

/* eslint-disable-next-line */
export interface ActionProps {}

export function Action(props: ActionProps) {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div
              className={
                'flex flex-col justify-center align-center gap-2 bg-teal-800'
              }
            >
              <Link to={'quickshares'}>Quickshares</Link>
              <Link to={'settings'}>Settings</Link>
            </div>
          }
        />
        <Route path="/quickshares" element={<Quickshares />} />
        <Route
          path="/settings"
          element={
            <div>
              <h1>
                <ul>SETTINGS</ul>
              </h1>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default Action;

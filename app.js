import { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
const uploadForm =lazy(()=>import('./app/views/uploadForm.ejs'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>} >
        <Switch>
          <Route path="/images" component={uploadForm} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;

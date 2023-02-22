import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import "mapbox-gl/dist/mapbox-gl.css";

import { HomeRoute, loader as homeLoader } from "./routes/home";
import { RootRoute } from "./routes/root";

import {
  ExampleMapboxRoute,
  loader as exampleMapboxLoader,
} from "./routes/examples/mapbox";
import {
  DestinationIdRoute,
  loader as desinationIdLoader,
} from "./routes/destinations/destinationId";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    children: [
      {
        path: "/",
        element: <HomeRoute />,
        loader: homeLoader,
      },
      {
        path: "/destinations/:destinationId",
        element: <DestinationIdRoute />,
        loader: desinationIdLoader,
      },
      {
        path: "/examples/mapbox",
        element: <ExampleMapboxRoute />,
        loader: exampleMapboxLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

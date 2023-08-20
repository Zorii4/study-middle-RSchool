import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "./index.css"
import App from "./App"
import { MantineProvider } from '@mantine/core'

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <MantineProvider withGlobalStyles>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MantineProvider>
)


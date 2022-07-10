import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./styles/global"
import { theme } from "./styles/theme"

import { Wrapper } from "./components/Wrapper"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper />
    </ThemeProvider>
  )
}

export default App
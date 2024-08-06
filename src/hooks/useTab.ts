import { useState } from 'react'

function useTab(value = 0) {
  const [tabValue, setTabValue] = useState(() => value)

  function switchTabs(e: React.SyntheticEvent, newValue: number) {
    setTabValue(newValue)
  }

  return {
    tabValue,
    setTabValue,
    switchTabs,
  }
}

export default useTab

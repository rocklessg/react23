import React from "react"

//Step 1 Create Context
const UserContext= React.createContext()

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}
import React, {useState} from "react";

export const AboutContext = React.createContext();

const AboutProvider = ({children}) => {
    const [about, setAbout] = useState(1);
    return (
        <AboutContext.Provider value={{about,setAbout}}>
            {children}
        </AboutContext.Provider>
    );
};
export default AboutProvider;
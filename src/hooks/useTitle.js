import { useEffect } from "react";
const useTitle = title =>{
     useEffect(() =>{
          document.title = `${title} - PH Toys Store`;
     }, [title])
};

export default useTitle;
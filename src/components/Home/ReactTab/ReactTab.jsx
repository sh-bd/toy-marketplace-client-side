import React, { useEffect, useState } from 'react';
import './ReactTab.css';
import TabCard from './TabCard/TabCard';

const ReactTab = () => {
     const [toggleState, setToggleState] = useState(1);
     const [isLoading, setIsLoading] = useState(true);
     const [tab1Data, setTab1Data] = useState([])
     const [tab2Data, setTab2Data] = useState([])
     const [tab3Data, setTab3Data] = useState([])

     useEffect(() => {
          fetch('http://localhost:5000/toy')
               .then(res => res.json())
               .then(data => {
                    const Tab1Data = data.filter(data => data.category === "Water Toys")
                    const Tab2Data = data.filter(data => data.category === "Scientific Toys")
                    const Tab3Data = data.filter(data => data.category === "Entertaining Toys")
                    setTab1Data(Tab1Data)
                    setTab2Data(Tab2Data)
                    setTab3Data(Tab3Data)
                    setIsLoading(false);
               })
     }, []);

     const toggleTab = (index) => {
          setToggleState(index);
     };
     return (
          <div className="container mt-5">
               <h1 className=' my-5 text-center'>Browse by Category</h1>
               <div className="bloc-tabs">
                    <button
                         className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                         onClick={() => toggleTab(1)}
                    >
                         Water Toys
                    </button>
                    <button
                         className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                         onClick={() => toggleTab(2)}
                    >
                         Scientific Toys
                    </button>
                    <button
                         className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                         onClick={() => toggleTab(3)}
                    >
                         Entertaining Toys
                    </button>
               </div>

               <div className="content-tabs">
                    <div
                         className={toggleState === 1 ? "content  active-content" : "content"}
                    >
                         <h1 className='my-4 text-center'>Water Toys</h1>
                         {
                              isLoading && <div className="text-center my-5">
                                   <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                   </div>
                              </div>
                         }
                         <div className='row mb-2'>
                              {
                                   tab1Data?.map(data => <TabCard
                                        key={data._id}
                                        data={data}
                                   ></TabCard>)
                              }
                         </div>
                    </div>

                    <div
                         className={toggleState === 2 ? "content  active-content" : "content"}
                    >
                         <h1 className='my-4 text-center'>Scientific Toys</h1>
                         {
                              isLoading && <div className="text-center my-5">
                                   <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                   </div>
                              </div>
                         }
                         <div className=' row mb-2'>
                              {
                                   tab2Data?.map(data => <TabCard
                                        key={data._id}
                                        data={data}
                                   ></TabCard>)
                              }
                         </div>
                    </div>

                    <div
                         className={toggleState === 3 ? "content  active-content" : "content"}
                    >
                         <h1 className='my-4 text-center'>Entertaining Toys</h1>
                         {
                              isLoading && <div className="text-center my-5">
                                   <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                   </div>
                              </div>
                         }
                         <div className='row mb-2'>
                              {
                                   tab3Data?.map(data => <TabCard
                                        key={data._id}
                                        data={data}
                                   ></TabCard>)
                              }
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ReactTab;
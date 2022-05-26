
import Spline from '@splinetool/react-spline'

function App() {
  return (
    
      <div className ="flex w-screen h-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20" >
        {/*NavBar*/}
        <nav className = "w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
          <div className="w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
            <p className='txt-lg text-slate-200 font-medium'>NOEL</p>

            <div className = "hidden md:flex items-center gap-6 ml-6 flex-1">
              
            </div>
          </div>
        </nav>
        <div className = "relative" id ="home">
          <Spline scene="https://prod.spline.design/OMi17k0PbFfnAKVc/scene.splinecode" />
        </div>
      </div>
     
  );
}

export default App;



// array of datas to store all the options in the filter
const data = [
  { name: 'lens' },
  { name: 'cat' },
  { name: 'dog' },
  { name: 'teaky' },
  { name: 'n2' },
  { name: 'camera' }
 
];

function category() {

  

    return (
      <>
        <div className="flex flex-row gap-10 border-y-4 border-black justify-evenly items-center p-5 text-[20px] font-inter">
          <div><p>NEW</p></div>
  
          <div><p>STATIONERY</p></div>
  
          <div><p>ACCESSORIES</p></div>
  
          <div><p>THEME</p></div>
  
          <div><p>20% OFF</p></div>
        </div>
        
        
      </>
    );
  }
  
  export default category;
  
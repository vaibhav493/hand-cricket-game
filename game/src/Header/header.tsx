import "./header.css";

const Header = () => {

    return(
        <div className="shadow-2xl border-b-2 pb-1 rounded-5px">
         <div className="items-center" >
         {/* <h1 className="text-[#1f6080] text-5xl font-bold">Cricket</h1>
         <p className="text-[#41687b] text-2xl italic">Enjoy Your childhood again</p> */}
         <img className="mx-auto" width={'5%'} src="https://media1.giphy.com/media/1zkptAtOMIEUSO66KC/200.webp?cid=ecf05e47cnt3tjkirbidskju0s1cpew6ozlq7swc5etdtlqi&rid=200.webp&ct=s" alt="" />
        </div>
        <div className="flex flex-col justify-center items-center" >
        <h1 className="text-[#1f6080] text-5xl font-bold">Cricket</h1>
        <p className="text-[#41687b] text-1xl italic">Enjoy Your childhood again</p>
       </div>
        </div>
       
    )
}

export default Header;
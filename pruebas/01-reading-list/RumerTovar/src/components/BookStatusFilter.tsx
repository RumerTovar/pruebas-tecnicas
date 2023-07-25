import { useContext } from 'react';
import BooksContext from '../context/BooksContext';

export default function BookStatusFilter() {
 const { available, setAvailable } = useContext(BooksContext);

 const onClickAvailable = () => {
  setAvailable(true);
 };

 const onClickToRead = () => {
  setAvailable(false);
 };

 return (
  <section className='flex justify-center py-[6.8125rem] font-body'>
   <button
    className={`w-[11.75rem] h-[3rem] ${
     available ? 'bg-black' : 'bg-gray-200'
    } bg-black rounded-tl-[3.125rem] rounded-bl-[50px] shadow flex justify-center items-center`}
    onClick={onClickAvailable}>
    <p className={`${available ? 'text-white' : 'text-black'} `}>
     6 Disponibles
    </p>
   </button>
   <button
    className={`w-[11.75rem] h-[3rem] ${
     available ? 'bg-white' : 'bg-black'
    }  rounded-tr-[3.125rem] rounded-br-[50px] shadow flex justify-center items-center`}
    onClick={onClickToRead}>
    <p className={`${available ? 'text-black' : 'text-white'}`}>2 Por leer</p>
   </button>
  </section>
 );
}

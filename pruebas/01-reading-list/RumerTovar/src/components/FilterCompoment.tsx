import searchIcon from '../assets/searchIcon.svg';

export default function FilterCompoment() {
 return (
  <div className=' flex text-center justify-center font-body text-zinc-500'>
   <div className='flex mr-[8px] flex-col bg-white px-[12px] rounded-lg justify-center'>
    <label htmlFor='category' className='text-left ml-1'>
     Categoria
    </label>
    <select name='category' id=''>
     <option value=''>Seleccionar</option>
    </select>
   </div>
   <div className='flex mr-[8px] flex-col bg-white px-[12px] rounded-lg justify-center'>
    <label htmlFor='pages' className='text-left ml-1'>
     Paginas
    </label>
    <select className='mr-[8px]' name='pages' id=''>
     <option value=''>Seleccionar</option>
    </select>
   </div>
   <div className='flex mr-[8px] flex-col bg-white px-[12px] rounded-lg justify-center'>
    <label htmlFor='search' className='text-left '>
     Buscar
    </label>
    <input
     className='pr-[98px] placeholder:text-zinc-500 placeholder:overflow-visible focus:outline-none'
     type='text'
     name='search'
     id=''
     placeholder='Por nombre, autor o fecha'
    />
   </div>
   <button className='mr-[8px] bg-buttom px-[20px] py-[18px] rounded-lg'>
    <img src={searchIcon} alt='searchIcon' />
   </button>
  </div>
 );
}

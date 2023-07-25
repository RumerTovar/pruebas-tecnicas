import BookStatusFilter from './components/BookStatusFilter';
import Title from './components/Title';
import FilterCompoment from './components/FilterCompoment';
import { BooksProvide } from './context/BooksContext';

export default function App() {
 return (
  <BooksProvide>
   <div className='h-screen bg-slate-950'>
    <div className='h-[650px] w-full bg-center bg-cover bg-[url("https://res.cloudinary.com/dadxytlg4/image/upload/v1689864977/squosh_cxk2pl.jpg")]'>
     <Title />
     <BookStatusFilter />
     <FilterCompoment />
    </div>
   </div>
  </BooksProvide>
 );
}

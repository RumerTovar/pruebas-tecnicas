interface Props {
 label: string;
 options: Array<string>;
}

export default function SelectComponent({ label, options }: Props) {
 return (
  <div className='flex mr-[8px] flex-col bg-white px-[12px] rounded-lg justify-center'>
   <label htmlFor='category' className='text-left ml-1'>
    {label}
   </label>
   <select name='category' id=''>
    {options.map((option) => {
     return (
      <option value={option} key={option}>
       {option}
      </option>
     );
    })}
   </select>
  </div>
 );
}

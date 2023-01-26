import { Check } from 'phosphor-react';

export function NewHabitForm() {
  return (
    <form className='w-full flex flex-col mt-6 text-white'>
      <label htmlFor='title' className='font-semibold leading-tight'>
        Qual seu comprometimento?
      </label>

      <input
        type='text'
        id='title'
        placeholder='ex.: Exercícios, dormir bem, etc...'
        className='p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400'
        autoFocus
      ></input>

      <label htmlFor='' className='font-semibold leading-tight mt-4'>
        Qual a recorrência?
      </label>

      <button
        type='submit'
        className='mt-4 rounded-lg p-4 flex items-center justify-center font-semibold 
        bg-green-600 gap-3 hover:bg-green-500'
      >
        <Check size={20} weight='bold'>
          Confirmar
        </Check>
      </button>
    </form>
  );
}

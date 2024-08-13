let list=[
    {
        first:'this is list 1',
        second:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam iure laboriosam recusandae mollitia vitae facilis fugit, consectetur voluptas autem, suscipit atque aperiam repudiandae, inventore doloremque. Nemo, quibusdam? Facilis, vitae nam.'
    },
    {
        first:'this is list 2',
        second:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam iure laboriosam recusandae mollitia vitae facilis fugit, consectetur voluptas autem, suscipit atque aperiam repudiandae, inventore doloremque. Nemo, quibusdam? Facilis, vitae nam.',
    },
    {
        first:'this is list 3',
        second:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam iure laboriosam recusandae mollitia vitae facilis fugit, consectetur voluptas autem, suscipit atque aperiam repudiandae, inventore doloremque. Nemo, quibusdam? Facilis, vitae nam.',
    },
    {
        first:'this is list 4',
        second:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam iure laboriosam recusandae mollitia vitae facilis fugit, consectetur voluptas autem, suscipit atque aperiam repudiandae, inventore doloremque. Nemo, quibusdam? Facilis, vitae nam.',
    },
    {
        first:'this is list 5',
        second:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam iure laboriosam recusandae mollitia vitae facilis fugit, consectetur voluptas autem, suscipit atque aperiam repudiandae, inventore doloremque. Nemo, quibusdam? Facilis, vitae nam.'
    },
   ]

   let item=items=>{
    return `
       <details>
         <summary>
         ${items.first}
         </summary>
         <p>${items.second}</p>
       </details>
    `
   }

   let container=document.querySelector('.container');
   container.innerHTML=list.map(lists=>item(lists))

















































   
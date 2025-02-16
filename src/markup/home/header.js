const buildHomeHeader = () => {
  const homeHeader = document.createElement('header');
  const headerHeader = document.createElement('h1');
   headerHeader.textContent = 'Projects'
   homeHeader.appendChild(headerHeader);

   homeHeader.innerHTML += `
   <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-search"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
   `

   document.querySelector('#app').append(homeHeader);
}

        export default buildHomeHeader;
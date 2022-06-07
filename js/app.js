const map = L.map('map').setView([47.02598352259393,28.824289883383045], 25);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

L.marker([47.02598352259393,28.824289883383045])
  .addTo(map)
  .bindPopup('E-trans')
  .openPopup();



// const disabledScroll = () => {
//     document.body.scrollPosition =window.scrollY;
//     document.body.style.cssText = `
//     overflow: hidden;
//     position: fixed;
//     top: -${document.body.scrollPosition}px;
//     left: 0;
//     hedht: 100wh;
//     widht: 100vw;
//     pading-right: ${window.innerWidth - document.body.offsetWidth}px;
//     `;
//   }
  

// const enabledScroll = () => {
//   document.body.style.cssText = '';
//   window.scroll({top: document.body.scrollPosition});
// };
//   const createElem = (tag, attr) => {
//     const elem = document.createElement(tag);
//     return Object.assign(elem, {...attr});
//   };

  

// const productTitle = document.querySelectorAll('.product__title');
// const productDescription = document.querySelectorAll('.product__description');
// const productButton = document.querySelectorAll('.product__button');

// const createModal = (title, description) => {
// 	const overlayElem = createElem('div', { className: 'modal' });
// 	const modalElem = createElem('div', { className: 'modal__block' });
// 	const modalContainerElem = createElem('div', { className: 'modal__container' });

// 	const titleElem = createElem('h2', {
// 		className: 'modal__title',
// 		textContent: `Заказать ${title}`,
// 	});

// 	const descriptionElem = createElem('p', {
// 		className: 'modal__description',
// 		textContent: description,
// 	});

// 	const formElem = createElem('form', {
// 		className: 'modal__form',
// 		method: 'post',
// 		action: 'https://jsonplaceholder.typicode.com/posts',
// 		id: 'order',
// 	});

// 	const nameLabelElem = createElem('label', {
// 		className: 'modal__label',

// 	});
// 	const nameSpanElem = createElem('span', {
// 		className: 'modal__text',
// 		textContent: 'Имя',
// 	});
// 	const nameInputElem = createElem('input', {
// 		className: 'modal__input',
// 		placeholder: 'Введите ваше имя',
// 		name: 'name',
// 		required: true,
// 	});

//     const createModal = (title, description) => {
//     const overlayElem = createElem('div', {className: 'modal'});
//     const modalElem = createElem('div', {className: 'modal__block'});
//     const modalContainerElem = createElem('div', {classname:'modal__container'});
// const titleElem = createElem('h2', {
//   className:'modal__title',
//   textContent: `Заказать ${title}`,
// });

// // const descriptionElem = createElem ('p', {
// //   className:'modal__description',
// //   textContent: description,
// // });
// //   const formElem = createElem ('form', {
// //     className:'modal__form',
// //     method: 'post',
// //     action: 'https://jsonplaceholder.typicode.com/posts',
// //     id: 'order',
// //   });
// //   const nameLabelElem = createElem('label', {className: 'modal__label'})
// //   const nameSpanElem = createElem('span', {className: 'modal__text', 
// //   textContent:'Имя'});
// //   const nameInputElem = createElem('input', {
// //     className: 'modal__input',
// //     placeholder:'Введите ваше имя',
// //     name: 'name',
// //     required:true,
// //   });

//   const phoneLabelElem = createElem('label', {className: 'modal__label'})
//   const phoneSpanElem = createElem('span', {className: 'modal__text', 
//   textContent:'Телефон'});
//   const phoneInputElem = createElem('input', {
//     className: 'modal__input',
//     placeholder:'Введите ваш телефон',
//     name: 'phone',
//     required: true,
       
//   });

//   const hideInput = createElem('input', {
//     type: 'hidden',
//     name: 'product',
//     value: title,
//   });

//   const btnSubmit = createElem('buton' , {
//     className: 'modal__btn',
//     textContent: 'Заказать',
//     type: 'submit',
//   });

//   btnSubmit.setAttribute('form', 'order');

//   const closeModalBtn = createElem('button', {
//     className: 'modal__close',
//     innerHTML: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M17.75 2.0125L15.9875 0.25L9 7.2375L2.0125 0.25L0.25 2.0125L7.2375 9L0.25 15.9875L2.0125 17.75L9 10.7625L15.9875 17.75L17.75 15.9875L10.7625 9L17.75 2.0125Z" fill="#18171A"/>
//     </svg>
//     `,
//   });

//   overlayElem.addEventListener('click', event =>{
// const target = event.target;
// if( target ===overlayElem || target.closest('.modal__close')) {
//   overlayElem.remove();
//   enabledScroll();
// }
//   });

//   nameLabelElem.append(nameSpanElem, nameInputElem);
//   phoneLabelElem.append(phoneSpanElem, phoneInputElem);
//   formElem.append(nameLabelElem, phoneLabelElem, hideInput);

//    modalContainerElem.append(titleElem,
//      descriptionElem,
//      formElem,
//       btnSubmit,
//       closeModalBtn,
//       );
//     modalElem.append(modalContainerElem);
//     overlayElem.append(modalElem);
//     disabledScroll();
//     document.body.append(overlayElem);
//     };

// const productTitle = document.querySelectorAll('.product__title');
// const productDescription = document.querySelectorAll('.product__description');
// const productBtn = document.querySelectorAll('.product__btn');



// for(let i=0; i<productBtn.length; i++) {
//   productBtn[i].addEventListener('click', ()=> {
//     const title = productTitle[i].textContent;
//     const description = productDescription[i].textContent;
//    createModal(title, description);
// });
// };


// // 	const phoneLabelElem = createElem('label', {
// // 		className: 'modal__label',

// // 	});
// // 	const phoneSpanElem = createElem('span', {
// // 		className: 'modal__text',
// // 		textContent: 'Телефон',
// // 	});
// // 	const phoneInputElem = createElem('input', {
// // 		className: 'modal__input',
// // 		placeholder: 'Введите ваш телефон',
// // 		name: 'phone',
// // 		required: true,
// // 	});

// // 	const hideInput = createElem('input', {
// // 		type: 'hidden',
// // 		name: 'product',
// // 		value: title,
// // 	});

// // 	const buttonSubmit = createElem('button', {
// // 		className: 'modal__button',
// // 		textContent: 'Оформить предзаказ',
// // 		type: 'submit',
// // 	})

// // 	buttonSubmit.setAttribute('form', 'order')
// // 	// кнопка вне формы, чтобы работал сабмит мы связываем кнопку с формой через id order, который указан в форме.

// // 	const closeModal = createElem('button', {
// // 		className: 'modal__close',
// // 		innerHTML: `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
// // <path d="M23.75 8.0125L21.9875 6.25L15 13.2375L8.0125 6.25L6.25 8.0125L13.2375 15L6.25 21.9875L8.0125 23.75L15 16.7625L21.9875 23.75L23.75 21.9875L16.7625 15L23.75 8.0125Z" fill="#00654E"/>
// // </svg>
// // `,
// // 		ariaLabel: 'Закрыть модальное окно',
// // 	})

// // 	overlayElem.addEventListener('click', e => {
// // 		const target = e.target;
// // 		if (target === overlayElem || target.closest('.modal__close')) {
// // 			overlayElem.remove();
// // 			enabledScroll();
// // 		}
// // 	})

// // 	nameLabelElem.append(nameSpanElem, nameInputElem);
// // 	phoneLabelElem.append(phoneSpanElem, phoneInputElem);
// // 	formElem.append(nameLabelElem, phoneLabelElem, hideInput);


// // 	modalContainerElem.append(
// // 		titleElem,
// // 		descriptionElem,
// // 		formElem,
// // 		buttonSubmit,
// // 		closeModal);

// // 	modalElem.append(modalContainerElem);
// // 	overlayElem.append(modalElem);
// // 	disabledScroll();
// // 	document.body.append(overlayElem);
// // };

// // for (let i = 0; i < productButton.length; i++) {
// // 	productButton[i].addEventListener('click', () => {
// // 		const title = productTitle[i].textContent;
// // 		const description = productDescription[i].textContent;
// // 		createModal(title, description);
// // 	})
// // };




// // ______________________________________________________________________________




//   // const articleElem = createElem('article', {
//   //   title: 'tfswfs',
//   //   className: 'block',
//   //   textContent: 'text'
//   // });
//   // console.dir(articleElem);

//   // const obj = {
//   //   name:'Петр',
//   //   age: 18,
//   //   s: {math: 5},
//   // };

//   // const newStudent = {
//   //   curse:1,
//   //   status: 'Бакалавр'
//   // };

//   // const student = Object.assign(obj, {...newStudent})
//   // console.log('student:', student);

//   // const divElement = document.createElement('div');
//   // divElement.className ='block';
//   // divElement.title ='тайтле ';
//   // divElement.textContent ="Привет JS"
//   // divElement.addEventListener('click', ()=> {
//   //   console.log(divElement);
//   // })
//   // document.body.append(divElement)
//   // console.log(divElement);
  

// Отключить скролл
const disabledScroll = () => {
	document.body.scrollPosition = window.scrollY;
	document.body.style.cssText = `
	position: fixed;
	overflow: hidden;
	top: -${document.body.scrollPosition}px;
	left: 0;
	padding-right: ${window.innerWidth - document.body.offsetWidth}px;
	height: 100wh;
	width: 100vw;
	`
};

// Включить скролл
const enabledScroll = () => {
	document.body.style.cssText = ``;
	window.scroll({
		top: document.body.scrollPosition
	});
};


/* Модальное окно */
const createElem = (tag, attr) => {
	const $elem = document.createElement(tag);
	return Object.assign($elem, { ...attr })
};

const productTitle = document.querySelectorAll('.product__title');
const productDescription = document.querySelectorAll('.product__description');
const productButton = document.querySelectorAll('.product__btn');

const createModal = (title, description) => {
	const $overlayElem = createElem('div', { className: 'modal' });
	const $modalElem = createElem('div', { className: 'modal__block' });
	const $modalContainerElem = createElem('div', { className: 'modal__container' });

	const $titleElem = createElem('h2', {
		className: 'modal__title',
		textContent: `Заказать ${title}`,
	});

	const $descriptionElem = createElem('p', {
		className: 'modal__description',
		textContent: description,
	});

	const $formElem = createElem('form', {
		className: 'modal__form',
		method: 'post',
		action: 'https://jsonplaceholder.typicode.com/posts',
		id: 'order',
	});

	const $nameLabelElem = createElem('label', {
		className: 'modal__label',

	});
	const $nameSpanElem = createElem('span', {
		className: 'modal__text',
		textContent: 'Имя',
	});
	const $nameInputElem = createElem('input', {
		className: 'modal__input',
		placeholder: 'Введите ваше имя',
		name: 'name',
		required: true,
	});


	const $phoneLabelElem = createElem('label', {
		className: 'modal__label',

	});
	const $phoneSpanElem = createElem('span', {
		className: 'modal__text',
		textContent: 'Телефон',
	});
	const $phoneInputElem = createElem('input', {
		className: 'modal__input',
		placeholder: 'Введите ваш телефон',
		name: 'phone',
		required: true,
	});

	const $hideInput = createElem('input', {
		type: 'hidden',
		name: 'product',
		value: title,
	});

	const $buttonSubmit = createElem('button', {
		className: 'modal__btn',
		textContent: 'Оформить предзаказ',
		type: 'submit',
	})

	$buttonSubmit.setAttribute('form', 'order')
	// кнопка вне формы, чтобы работал сабмит мы связываем кнопку с формой через id order, который указан в форме.

	const $closeModal = createElem('button', {
		className: 'modal__close',
		innerHTML: `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.75 8.0125L21.9875 6.25L15 13.2375L8.0125 6.25L6.25 8.0125L13.2375 15L6.25 21.9875L8.0125 23.75L15 16.7625L21.9875 23.75L23.75 21.9875L16.7625 15L23.75 8.0125Z" fill="#00654E"/>
</svg>
`,
		ariaLabel: 'Закрыть модальное окно',
	})

	$overlayElem.addEventListener('click', e => {
		const target = e.target;
		if (target === $overlayElem || target.closest('.modal__close')) {
			$overlayElem.remove();
			enabledScroll();
		}
	})

	$nameLabelElem.append($nameSpanElem, $nameInputElem);
	$phoneLabelElem.append($phoneSpanElem, $phoneInputElem);
	$formElem.append($nameLabelElem, $phoneLabelElem, $hideInput);


	$modalContainerElem.append(
		$titleElem,
		$descriptionElem,
		$formElem,
		$buttonSubmit,
		$closeModal);

	$modalElem.append($modalContainerElem);
	$overlayElem.append($modalElem);
	disabledScroll();
	document.body.append($overlayElem);
};

for (let i = 0; i < productButton.length; i++) {
	productButton[i].addEventListener('click', () => {
		const title = productTitle[i].textContent;
		const description = productDescription[i].textContent;
		createModal(title, description);
	})
}
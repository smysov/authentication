function templateRegistration() {
	return `
    <div class="overlay">
      <div class="overlay__content">
        <form class="form form_registration" name="new-user">
          <div class="form__title form__title_registration">Create new account</div>
          <div class="form__group">
            <div class="form__row form__control">
              <label for="email" class="form__caption form__caption_registration">Email address:</label>
              <input class="form__input form__input_registration" type="email" id="new-email" placeholder="my-email@list.ru" data-required="email"
                data-invalid-message="Enter a valid email address test@list.ru">
            </div>
            <div class="form__row form__control">
              <label for="password" class="form__caption form__caption_registration">Password:</label>
              <input class="form__input form__input_registration" type="password" name="password" id="new-password" data-required="password">
            </div>
          </div>
          <div class="form__row form__control">
            <label for="nickname" class="form__caption form__caption_registration">Nickname:</label>
            <input class="form__input form__input_registration" type="text" name="nickname" id="nickname">
          </div>
          <div class="form__group">
            <div class="form__row form__control">
              <label for="name" class="form__caption form__caption_registration">Your name:</label>
              <input class="form__input form__input_registration" type="text" name="name" id="name">
            </div>
            <div class="form__row form__control">
              <label for="surname" class="form__caption form__caption_registration">Your surname:</label>
              <input class="form__input form__input_registration" type="text" name="surname" id="surname">
            </div>
          </div>
          <div class="form__row form__control">
            <label for="phone" class="form__caption form__caption_registration">Phone:</label>
            <input class="form__input form__input_registration" type="tel" name="phone" id="phone" placeholder="89270001988">
          </div>
          <div class="form__row form__control options">
            <div class="form__column">
              <input class="form__radio" type="radio" name="phone" id="male">
              <label for="male" class="form__caption form__caption_radio form__caption_registration">Male</label>
            </div>
            <div class="form__column">
              <input class="form__radio" type="radio" name="phone" id="female">
              <label for="female" class="form__caption form__caption_radio form__caption_registration">Female</label>
            </div>
          </div>
          <div class="form__group">
            <div class="form__row form__control">
              <label for="city" class="form__caption form__caption_registration">City:</label>
              <input class="form__input form__input_registration" type="text" name="city" id="city">
            </div>
            <div class="form__row form__control">
              <label for="country" class="form__caption form__caption_registration">Country:</label>
              <input class="form__input form__input_registration" type="text" name="country" id="country">
            </div>
          </div>
          <div class="form__group form__group_birthday">
            <div class="form__row form__row_small form__control">
              <label for="date" class="form__caption form__caption_registration">Date birth:</label>
              <input class="form__input form__input_registration" type="text" name="date" id="date" placeholder="01">
            </div>
            <div class="form__row form__row_small form__control">
              <label for="month" class="form__caption form__caption_registration">Month birth:</label>
              <input class="form__input form__input_registration" type="text" name="month" id="month" placeholder="10">
            </div>
            <div class="form__row form__row_small form__control">
              <label for="year" class="form__caption form__caption_registration">Year birth:</label>
              <input class="form__input form__input_registration" type="text" name="year" id="year" placeholder="1988">
            </div>
          </div>
          <div class="form__row">
            <button class="button form__button" type="submit">Send</button>
          </div>
        </form>
        <a href="#" class="overlay__close"></a>
      </div>
    </div>
  `;
}

function renderFormRegistration() {
	const template = templateRegistration();
	const main = document.querySelector('main');
	main.insertAdjacentHTML('beforeend', template);

	closeOverlay();
}

function closeOverlay() {
	const buttonClose = document.querySelector('.overlay__close');
	const overlay = document.querySelector('.overlay');
	buttonClose.addEventListener('click', e => {
		e.preventDefault();
		animationCloseOverlay();
		setTimeout(() => overlay.remove(), 500);
	});
}

function animationCloseOverlay() {
  const overlayContent = document.querySelector('.overlay__content');
	overlayContent.animate([{ transform: 'scale(1)' }, { transform: 'scale(0)' }], {
		duration: 500,
	});
}
export default renderFormRegistration;

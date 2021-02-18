// import closeOverlay from '../helpers/closeOverlay';

function templateOverlayRegistration() {
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
              <input class="form__radio" type="radio" name="phone" id="male" value="male">
              <label for="male" class="form__caption form__caption_radio form__caption_registration">Male</label>
            </div>
            <div class="form__column">
              <input class="form__radio" type="radio" name="phone" id="female" value="female">
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
          <div class="form__row form__control">
            <label for="birthday" class="form__caption form__caption_registration">Birthday:</label>
            <input class="form__input form__input_registration" type="date" name="birthday" id="birthday">
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

function renderOverlayRegistration() {
	const template = templateOverlayRegistration();
	const container = document.querySelector('.wrapper-overlay');
	container.insertAdjacentHTML('beforeend', template);

	// closeOverlay();
}

export default renderOverlayRegistration;

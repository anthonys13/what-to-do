import React from 'react'

const Main = () => {
  return (
    <main class="container">
      <div class="section">
        <div class="row">

          <div class="col s6 grey lighten-2 list-section">
            <div class="card #bcaaa4 brown lighten-3">
              <div class="card-content black-text list-content center">
                <span class="card-title center">List Title</span>
                <div className="btn-list">
                  <button class="btn-floating btn-tiny waves-effect waves-light red" ><i class="material-icons">add</i></button>
                  <button className="btn-flat waves-effect waves-light"><i class="material-icons">clear</i></button>
                </div>
              </div>
              <div class="col s12">
                <div class="card #ffe0b2 orange lighten-4">
                  <div class="card-content black-text card-padding">
                    <span class="card-title">Card Title <button className="btn-flat waves-effect waves-light"><i class="material-icons">clear</i></button></span>
                  </div>
                  <p>SALUT JE SUIS LE CONTENU DE LA CARD</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col s6 grey lighten-2 list-section">
            <div class="card #bcaaa4 brown lighten-3">
              <div class="card-content black-text">
                <span class="card-title">List Title</span>
                <div className="btn-list">
                  <button class="btn-floating btn-tiny waves-effect waves-light red" ><i class="material-icons">add</i></button>
                  <button className="btn-flat waves-effect waves-light"><i class="material-icons">clear</i></button>
                </div>
              </div>
              <div class="col s12">
                <div class="card #ffe0b2 orange lighten-4">
                  <div class="card-content black-text card-padding">
                    <span class="card-title">Card Title <button className="btn-flat waves-effect waves-light"><i class="material-icons">clear</i></button></span>
                  </div>
                  <p>SALUT JE SUIS LE CONTENU DE LA CARD</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

export default Main
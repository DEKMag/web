import styles from './Card.module.scss';

const Card = () => {
  return (
    <>
      <div className={styles.logo}>
        <div className={styles.shell}>
          <div className={styles.nameTextContent}>[ 'Сергей Корвинус' ]</div>
          <div className={styles.contentCenter}>
            <div className={styles.contentLeft}>
              <div className={styles.leftOne}>
                <div className={styles.block}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div className={styles.block1}>
                    <div className={styles.block2}>
                      <div className={styles.block3}>
                        <div className={styles.block4}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.leftTwo}></div>
              <div className={styles.leftFree}></div>
            </div>
            <div className={styles.contentRight}>
              <div className={styles.rightOne}>
                <div className={styles.rightHTML}>
                  <span className={styles.rightHTMLvalue}>90%</span>
                </div>
                <span className={styles.rightHTMLtext}>HTML</span>
              </div>

              <div className={styles.rightTwo}>
                <div className={styles.rightCSS}>
                  <span className={styles.rightCSSvalue}>85%</span>
                </div>
                <span className={styles.rightCSStext}>CSS</span>
              </div>

              <div className={styles.rightBlock}></div>

              <div className={styles.rightFree}>
                <div className={styles.rightJS}>
                  <span className={styles.rightJSvalue}>45%</span>
                </div>
                <span className={styles.rightJStext}>JS</span>
              </div>

              <div className={styles.rightFour}>
                <div className={styles.rightREACT}>
                  <span className={styles.rightREACTvalue}>55%</span>
                </div>
                <span className={styles.rightREACTtext}>REACT</span>
              </div>

              <div className={styles.rightBlock}></div>

              <div className={styles.rightFive}>
                <div className={styles.rightGIT}>
                  <span className={styles.rightGITvalue}>65%</span>
                </div>
                <span className={styles.rightGITtext}>GIT</span>
              </div>

              <div className={styles.rightSix}>
                <div className={styles.rightDOCKER}>
                  <span className={styles.rightDOCKERvalue}>30%</span>
                </div>
                <span className={styles.rightDOCKERtext}>DOCKER</span>
              </div>

              <div className={styles.rightSeven}></div>
              <div className={styles.rightEight}></div>
            </div>
          </div>
          <div className={styles.nameTextContentPhone}>
            [ 'Сергей Корвинус' ]
          </div>
          <div className={styles.contentCenterPhone}>
            <div className={styles.oneContainer}>
              <div className={styles.contentOnePhone}></div>
              <div className={styles.contentTwoPhone}></div>
              <div className={styles.contentFreePhone}></div>
            </div>
            <div className={styles.TwoContainer}>
              <div className={styles.rightOnePhone}>
                <div className={styles.rightHTMLPhone}>
                  <span className={styles.rightHTMLvaluePhone}>90%</span>
                </div>
                <span className={styles.rightHTMLtextPhone}>HTML</span>
              </div>
              <div className={styles.rightTwoPhone}>
                <div className={styles.rightCSSPhone}>
                  <span className={styles.rightCSSvaluePhone}>85%</span>
                </div>
                <span className={styles.rightCSStextPhone}>CSS</span>
              </div>
              <div className={styles.rightFreePhone}>
                <div className={styles.rightJSPhone}>
                  <span className={styles.rightJSvaluePhone}>45%</span>
                </div>
                <span className={styles.rightJStextPhone}>JS</span>
              </div>

              <div className={styles.rightFourPhone}>
                <div className={styles.rightREACTPhone}>
                  <span className={styles.rightREACTvaluePhone}>55%</span>
                </div>
                <span className={styles.rightREACTtextPhone}>REACT</span>
              </div>

              <div className={styles.rightFivePhone}>
                <div className={styles.rightGITPhone}>
                  <span className={styles.rightGITvaluePhone}>65%</span>
                </div>
                <span className={styles.rightGITtextPhone}>GIT</span>
              </div>

              <div className={styles.rightSixPhone}>
                <div className={styles.rightDOCKERPhone}>
                  <span className={styles.rightDOCKERvaluePhone}>30%</span>
                </div>
                <span className={styles.rightDOCKERtextPhone}>DOCKER</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

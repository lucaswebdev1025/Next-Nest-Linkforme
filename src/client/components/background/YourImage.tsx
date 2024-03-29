import * as React from 'react';
import { useDispatch } from 'react-redux';
import { setYourImage } from 'src/client/store/factory/actions';
import styles from 'src/client/styles/stylesScreen.module.sass';
import Photo from '../../../assets/photo.svg';

export default function YourImage () {
    const dispatch = useDispatch();
    const container = React.useRef<HTMLDivElement>(null);

    const imageDialog = () => {
        const input = document.createElement('input');

        input.type = 'file';

        input.accept = 'image/png, image/gif, image/jpeg, image/svg';

        input.style.display = 'none';

        document.body.appendChild(input);

        input.addEventListener('change', (event: any) => {
          const file = event.target.files[0];

          if(file?.size > 10000000){
            alert('File size is limited to 10MB')
            return;
          }
          if (file) {
            dispatch(setYourImage(file));
          }
        });

        input.click();
      };
    return (
        <div className={styles.newThemeWrapper} ref={container}>
            <div className={styles.icon} onClick={imageDialog}>
                <Photo/>
                <div>Your <br></br>Image</div>
            </div>
        </div>
    )
}
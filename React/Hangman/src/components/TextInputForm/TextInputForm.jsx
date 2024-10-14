import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'

function TextInputform({inputType, handleFormSubmit,handleTextInputChange, handleShowHideClick}){

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <TextInput
                type={inputType}
                    label="Enter a word or a phrase"
                    placeholder="Enter a word or phrase here ..."
                    onChangeHandler={handleTextInputChange}
                />
            </div>
            <div>
                <Button
                    styleType="warning"
                    text={inputType==="password"?"Show":"Hide"}
                    onClickHandler={handleShowHideClick}
                />
            </div>
            <div>
                <Button
                    type="submit"
                    styleType="primary"
                    text="Submit"
                />
            </div>
        </form>
    )
}

export default TextInputform;
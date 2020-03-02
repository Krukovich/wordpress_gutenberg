const { __ } = wp.i18n
const { InspectorControls, MediaUpload } = wp.blockEditor
const { PanelBody } = wp.components

const Controls = ({ attributes, setAttributes }) => {

    const changeLoginForm = (event, attributesName) => { 
        const value = event.target.value;

        setAttributes({
            [attributesName]: value
        })
    }

    return (
        <InspectorControls>
            <PanelBody>
                <label>Name form</label>
                <input 
                    type="text"
                    onChange={event => changeLoginForm(event, "formName")}
                />
                <label>Position Form</label>
                <select
                    onChange={event => changeLoginForm(event, "position")}
                >
                    <option>left</option>
                    <option>center</option>
                    <option>right</option>
                </select><br/>
                <label>Title Size</label>
                <input type="range"
                    min="16"
                    max="46"
                    onChange={event => changeLoginForm(event, "titleSize")}
                />
            </PanelBody>
        </InspectorControls>
    )
}

export default Controls
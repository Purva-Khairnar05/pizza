import "./Button.css";

function Button({ title, variant}) {
    return (
        <>
        <button className={'btn btn-${variant}'}>{title}</button>
        </>
    );
}
function TestButton() {
    return (
        <>
        <h2>I am test button</h2>
        </>
    );
}

function XYZ() {
    return (
        <>
        <h2>I am test button</h2>
        </>
    );
}
export { Button, TestButton};
export default XYZ;
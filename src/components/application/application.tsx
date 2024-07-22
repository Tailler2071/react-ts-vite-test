export const Application = () => {
    return (
        <>
            <form>
                <h1>Jop application form</h1>
                <h2>Section 1</h2>
                <p>All fields are mandatory</p>
                <span title="close">X</span>
                <img src="" alt="a person with a laptop"/>
                <div data-testid="custom-element">Custom HTML element</div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name"/>
                </div>
                <div>
                    <label htmlFor="bio">Bio</label>
                    <textarea
                        id="bio"
                        name="bio"
                        placeholder="Fullname"
                        value="Alex"
                        onChange={() => {
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="job-location">Name</label>
                    <select id="job-location">
                        <option value="">Select a country</option>
                        <option value="US">United States</option>
                        <option value="GB">United Kingdom</option>
                        <option value="CA">Canada</option>
                        <option value="IN">India</option>
                        <option value="AU">Australia</option>
                    </select>
                </div>
                <div>
                    <label>
                        <input type="checkbox" id="terms"/>
                        <span>I agree to the terms and conditions</span>
                    </label>
                </div>
                <button>Submit</button>
            </form>
        </>
    );
};
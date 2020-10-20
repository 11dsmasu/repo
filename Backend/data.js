const destination = [
    {
        Province: 'Milne Bay',
        Town: 'Alotau',
        Hotels: ['Tawali','Alotau Intl'],
        Sites: 'East cape',
        Festival: 'Canoe Festival',
        Leisure: ['Diving','Tracking','Snorkeling','Cycling']
    }
]

const formArea =`
//<form action="/my-handling-form1-page" method="post">
<h1> Add Destination </h1> 
<p> Hey there!! Is there a place in Papua New Guinea that you think should make the list, please add below</p>
    <p>
            <label for="province">Province:</label>
            <input type="text" id="province" name="user_province" value="by default this element is filled with this text">
        </p>
        <p>
            <label for="town">Town:</label>
            <input type="text" id="town" name="user_town">
        </p>
        <p>
            <label for="hotels">Hotels:</label>
            <input type="text" id="hotels" name="user_hotels">
        </p>
        <p>
            <label for="sites">Sites:</label>
            <input type="text" id="sites" name="user_sites">
        </p>
        <p>
            <label for="festival">Festival:</label>
            <input type="text" id="festival" name="user_festival">
        </p>
        <p>
            <label for="leisure">Leisure:</label>
            <input type="text" id="leisure" name="user_leisiure">
        </p>
        
    <div class="button">
        <button type="submit">Add Destination</button>
    </div>
    <footer style="color:lightblue">Copyright dmasu@switchmaven</footer>
//</form>
`

exports.places = destination
exports.form = formArea

const ListsPrograming = {
    name: "ListsPrograming",
    template: `
    <div> 
        <list-alert-success></list-alert-success>
            <ul>
                <li v-for="l in language">{{ l }}</li>
            </ul>
        </div>`,

    data: function() {
        return {
            language : ['c#', 'c++', 'html', 'Vue', 'Laravel']
        }
    }
}
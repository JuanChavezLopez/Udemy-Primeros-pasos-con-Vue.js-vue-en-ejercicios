const ListsPrograming = {
    name: "ListsPrograming",
    template: `
        
        <div> 
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
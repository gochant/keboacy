var datasource = new kendo.data.HierarchicalDataSource({
    data: [
        {
            title: "SciFi",
            movies: [
                {
                    title: "Star Wars: A New Hope", year: 1977, cast: [
                    {
                        title: "Mark Hamill", character: "Luke Skywalker", cast: [
                        { title: "Mark Hamill", character: "Luke Skywalker" },
                        { title: "Harrison Ford", character: "Han Solo" },
                        { title: "Carrie Fisher", character: "Princess Leia Organa" },
                        { title: "Billy Dee Williams", character: "Lando Calrissian" }
                        ]
                    },
                    { title: "Harrison Ford", character: "Han Solo" },
                    { title: "Carrie Fisher", character: "Princess Leia Organa" }
                    ]
                },
                {
                    title: "Star Wars: The Empire Strikes Back", year: 1980, cast: [
                    { title: "Mark Hamill", character: "Luke Skywalker" },
                    { title: "Harrison Ford", character: "Han Solo" },
                    { title: "Carrie Fisher", character: "Princess Leia Organa" },
                    { title: "Billy Dee Williams", character: "Lando Calrissian" }
                    ]
                }
            ]
        },
        {
            title: "SciFi",
            movies: [
                {
                    title: "Star Wars: A New Hope", year: 1977, cast: [
                    { title: "Mark Hamill", character: "Luke Skywalker" },
                    { title: "Harrison Ford", character: "Han Solo" },
                    { title: "Carrie Fisher", character: "Princess Leia Organa" }
                    ]
                },
                {
                    title: "Star Wars: The Empire Strikes Back", year: 1980, cast: [
                    { title: "Mark Hamill", character: "Luke Skywalker" },
                    { title: "Harrison Ford", character: "Han Solo" },
                    { title: "Carrie Fisher", character: "Princess Leia Organa" },
                    { title: "Billy Dee Williams", character: "Lando Calrissian" }
                    ]
                }
            ]
        }
    ],
    schema: {
        model: {
            children: { // define options for second level
                schema: {
                    data: "movies",
                    model: {
                        children: "cast" // third level is defined by the field "cast"
                    }
                }
            }
        }
    }
});

kendo.bind($('body'), {
    tree: datasource
})

var tree = kendo.widgetInstance($('#tree'))
tree.bind('change', function (e) {
    console.log(e);
});
datasource.read();
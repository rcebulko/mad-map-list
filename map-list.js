// YOU CAN EDIT THIS
// Format: Title; Image URL; [Optional] link-to URL
const maps = `
Tavern; https://i.pinimg.com/originals/72/97/b6/7297b610d93de085a4f0db214d0fbea2.png; https://www.pinterest.com/pin/396105729728755072/
Cave; https://preview.redd.it/7ul366do6m151.jpg?width=960&crop=smart&auto=webp&s=6d3c05bdd7f9bb4bd778323c889f4a5f82b78c3c; https://www.reddit.com/r/battlemaps/comments/gsk57d/goblin_cave_25x25_cave_map/

Tavern; https://i.pinimg.com/originals/72/97/b6/7297b610d93de085a4f0db214d0fbea2.png; https://www.pinterest.com/pin/396105729728755072/
# Section blah blah
Cave; https://preview.redd.it/7ul366do6m151.jpg?width=960&crop=smart&auto=webp&s=6d3c05bdd7f9bb4bd778323c889f4a5f82b78c3c; https://www.reddit.com/r/battlemaps/comments/gsk57d/goblin_cave_25x25_cave_map/
Tavern; https://i.pinimg.com/originals/72/97/b6/7297b610d93de085a4f0db214d0fbea2.png; https://www.pinterest.com/pin/396105729728755072/

Cave; https://preview.redd.it/7ul366do6m151.jpg?width=960&crop=smart&auto=webp&s=6d3c05bdd7f9bb4bd778323c889f4a5f82b78c3c; https://www.reddit.com/r/battlemaps/comments/gsk57d/goblin_cave_25x25_cave_map/
`
const mapListHtml = maps.trim()
  .split('\n')
  .filter(Boolean) // Ignore empty lines
  .filter(line => !line.startsWith('#')) // Ignore # comment lines
  .map(
    line => line.split(';').map(s => s.trim())
  )
  .map(parts => {
    const [title, imgUrl, linkUrl] = parts;
    let img = `<img src='${imgUrl}'><span class='map-title'>${title}</span>`
    if (linkUrl) {
      img = `<a href='${linkUrl}'>${img}</a>`;
    }
    return `<div class='map'>${img}</div>`;
  })
  .join('\n')

document.getElementById('container').innerHTML = mapListHtml;

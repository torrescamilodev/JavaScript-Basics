function FairyTailMage(name, color, magic) {
    this.name = name
    this.color = color
    this.magic = magic
    this.isMaster = false
    this.displayInfo = function () {
        console.log(`Fairy Tail mage Information:
        Name: ${this.name}
        Color: ${this.color}
        Magic: ${this.magic}
        ${this.isMaster ? 'Master: Yes' : 'Master: No'}
        `)
    }
    this.becomeMaster = function () {
        this.isMaster = true
        console.log(`${this.name} has become the master of the Fairy Tail !
        `)
    }
}
const natsu = new FairyTailMage('Natsu', 'Pink', 'Fire')
const gray = new FairyTailMage('Gray', 'Blue', 'Ice')
const erza = new FairyTailMage('Erza', 'Red', 'Armor')
natsu.displayInfo()
gray.displayInfo()
erza.displayInfo()

erza.becomeMaster()

natsu.displayInfo()
gray.displayInfo()
erza.displayInfo()
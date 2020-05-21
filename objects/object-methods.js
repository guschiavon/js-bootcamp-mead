let restaurant = {
  name: 'Warung Lokal',
  guestCapacity: 20,
  guestCount: 0,
  checkAvailability: function (partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount
    return partySize <= seatsLeft
  },
  seatParty: function(partySize){
    this.guestCount = this.guestCount + partySize
  },
  removeParty: function(partySize){
    this.guestCount = this.guestCount - partySize
  }
}

restaurant.seatParty(5)
console.log(restaurant.checkAvailability(3))
restaurant.seatParty(12)
console.log(restaurant.checkAvailability(5))
restaurant.removeParty(8)
console.log(restaurant.checkAvailability(5))

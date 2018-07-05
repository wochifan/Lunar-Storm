class Store {
    constructor() {
        this.state = {
            concert: false
        }
    }
    open(concert) {
        this.state.concert = concert
    }
    close() {
        this.state.concert = false
    }
}

export default new Store()
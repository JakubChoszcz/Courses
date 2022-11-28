interface User {
    readonly dbId: number
    email: string
    userId: number
    googleId?: string
    // startTrail: () => string
    startTrail(): string,
    getCoupon(couponname: string, value: number): number
}

const Jakub: User = {
    email: 'jc@jc.jc',
    userId: 123,
    dbId: 12,
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "Jakub", off: 10) => {
        return 10
    }
}

Jakub.email = 'cj@cj.cj'

export {}
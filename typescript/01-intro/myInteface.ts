interface User {
    readonly dbId: number
    email: string
    userId: number
    googleId?: string
    // startTrail: () => string
    startTrail(): string,
    getCoupon(couponname: string, value: number): number
}

interface User {
    gitHubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const Jakub: Admin = {
    email: 'jc@jc.jc',
    userId: 123,
    dbId: 12,
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "Jakub", off: 10) => {
        return 10
    },
    gitHubToken: 'github',
    role: "admin"
}

Jakub.email = 'cj@cj.cj'

export {}
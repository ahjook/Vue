import ROUTER from 'router';

export default {
    user: null,
    registeredUser: [],
    subjects:[],
    setUser(user){
        this.user = user
    },
    getUser(user){
        return this.user = user;
    },
    register(username, password){
        this.registeredUser.push({
            username: username,
            password: password,
        })
        ROUTER.push('/login')
    },
    login( username , password ){
        for(let i = 0; i < this.registeredUser.length; i++){
            if(this.registeredUser[i].username === username && this.registeredUser[i].password === password){
                ROUTER.push('/dashboard')
                this.setUser(username)
                return this.registeredUser[i]           
            }
        }
        return null
    },
    logout(){
        this.registeredUser = null
        ROUTER.push('/login')
    },

    addSubjects(teacher, time, day, room) {
        this.subjects.push({
            teacher: teacher,
            time: time,
            day: day,
            room: room,
        });
    },
    save(username, email, password) {
        for (let i = 0; i < this.registeredUser.length; i++) {
            this.registeredUser[i].username = username,
            this.registeredUser[i].email = email,
            this.registeredUser[i].password = password
        }
        alert('Update Succesfully!')
        ROUTER.push('/Account')
    },
    // addPosts(post) {
    //     this.post.push({
    //     });
    // },
    // post(username) {

    // }
    


    

}
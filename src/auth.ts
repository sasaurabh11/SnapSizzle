import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { ConnectDB } from "./db/db_config"
import User from "./models/user.model";
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
        clientId : process.env.GOOGLE_CLIENT_ID,
        clientSecret : process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  secret : process.env.NEXTAUTH_SECRET,
  
  callbacks : {
    async session({session} : {session : any}){
      try {
        
        await ConnectDB()

        if(session.user) {

          const user = await User.findOne({email : session.user.email})

          if(user) {
            session.user._id = user._id
            return session
          }
          else {
            console.log("user not found")
          }

        } else {
          console.log('invalid session')
        }

      } catch (error) {
        console.log(error)
        throw error
      }
    },

    async signIn({account, profile}) {
      // console.log("account : ", account)
      // console.log("Profile : ", profile)

      if(account?.provider === 'google') {
        await ConnectDB()
        try {
          const user = await User.findOne({email : profile?.email})
          if(!user) {
            const newUser = await User.create({
              username: profile?.email,
              fullname: profile?.name,
              email: profile?.email,
              profilePhoto: profile?.picture
            })

            await newUser.save()
          }

          return true

        } catch (error) {
          console.log(error)
          throw error
        }
      }
      return false
    }
  }
})
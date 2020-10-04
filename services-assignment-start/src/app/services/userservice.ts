export class UserService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  activecount=0;
  inactivecount=0;

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    //this.inactivecount = this.inactiveUsers.length;
     ++(this.inactivecount);     
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
   // this.activecount = this.activeUsers.length;
    ++(this.activecount)
  }
}

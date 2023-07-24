function skillsMembers() {
  var members = [];
  for (var i = 0; i < 10; i++) {
    members.push({
      id: i,
      name: 'Member ' + i,
      skills: skillsSkills()
    });
  }
  return members;
}
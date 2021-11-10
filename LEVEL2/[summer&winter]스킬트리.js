/********************************************************************************
📌 문제 링크
- https://programmers.co.kr/learn/courses/30/lessons/49993?language=javascript
 ********************************************************************************/

function solution(skill, skill_trees) {
  const regex = new RegExp(`[^${skill}]`, 'g');

  return skill_trees
    .map(skill_tree => skill_tree.replace(regex, ''))
    .filter(skill_tree => {
      return skill.indexOf(skill_tree) === 0 || skill_tree === "";
    })
    .length
}

import React from 'react';

export default function EducationPreview(props) {
  return (
    <section>
      <div>{props.educationInfos.school}</div>
      <div>{props.educationInfos.course}</div>
      <div>{props.educationInfos.gradDate}</div>
    </section>
  );
}

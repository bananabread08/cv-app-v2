import React from 'react';

export default function GeneralInfoPreview(props) {
  return (
    <section>
      <div>{props.infos.name}</div>
      <div>{props.infos.role}</div>
      <div>{props.infos.contact}</div>
      <div>{props.infos.email}</div>
      <div>{props.infos.site}</div>
    </section>
  );
}

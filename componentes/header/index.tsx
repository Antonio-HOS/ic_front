import styles from "../app/styles.module.scss";

export function Header() {
  return (
    <div
      className={
        ""
      }
    >
      <h1>
        <a href="/">Aqua Portal</a>
      </h1>
      <label htmlFor="page">
        <a href="/comunidade">Comunidade</a>
      </label>
      <label htmlFor="page">
        <a href="/login">Entrar</a>
      </label>
    </div>
  );
}

import styles from './slack.module.css';

/* eslint-disable-next-line */
export interface SlackProps {}

export function Slack(props: SlackProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Slack!</h1>
    </div>
  );
}

export default Slack;

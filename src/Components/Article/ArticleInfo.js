import { ReactComponent as ClockLogo } from "../../assets/img/clock-logo.svg";
import { DATE_TEMPLATE, DEFAULT_AVATAR } from "../../contansts";
import relativeTime from "dayjs/plugin/relativeTime";
import localeVi from "dayjs/locale/vi";
import dayjs from "dayjs";

dayjs.locale(localeVi);
dayjs.extend(relativeTime);

export default function ArtcileInfo({
  isAuthorAvatarIncluded,
  isAuthorNameIncluded,
  author,
  createdDate,
}) {
  const createdDateObj = dayjs(createdDate);
  const dateFormatted = createdDateObj.format(DATE_TEMPLATE);
  const dateRelative = createdDateObj.fromNow();
  return (
    <div className="article-item__info">
      {isAuthorAvatarIncluded && (
        <div className="article-item__author-image">
          <a aria-label="John Doe" href="/">
            <img
              src={author.avatar ? author.avatar : DEFAULT_AVATAR}
              alt="john-doe"
            />
          </a>
        </div>
      )}
      <div className="article-item__info-right">
        {isAuthorNameIncluded && (
          <div className="article-item__author-name">
            <a href="/">
              <strong>{author.nickname}</strong>
            </a>
          </div>
        )}
        <div className="article-item__datetime">
          <div className="date">{dateFormatted}</div>
          &nbsp;
          <div className="time">
            <ClockLogo />
            &nbsp;
            {dateRelative}
          </div>
        </div>
      </div>
    </div>
  );
}

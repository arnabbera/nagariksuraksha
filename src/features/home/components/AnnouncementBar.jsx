const AnnouncementBar = () => {
  return (
    <div className="ns-announcement">
      <div className="ns-announcement-inner">
        <span>
          ⚖️ Free Initial Legal Consultation
        </span>

        <span>•</span>
        <span>LL.B Learning</span>

        <span>•</span>
        <span>Property Registration</span>

        <span>•</span>
        <span>Consumer Cases</span>

        <span>•</span>
        <span>Cyber Law</span>
      </div>

      <style>
        {`
          .ns-announcement,
          .ns-announcement * {
            box-sizing: border-box;
          }

          .ns-announcement {
            width: 100%;
            max-width: 100vw;
            overflow: hidden;
            background: #1d4ed8;
            color: #ffffff;
          }

          .ns-announcement-inner {
            display: flex;
            width: 100%;
            max-width: 1280px;
            margin: 0 auto;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 5px 8px;
            padding: 8px 16px;

            text-align: center;
            font-size: 13px;
            font-weight: 600;
            line-height: 1.45;
          }

          @media (max-width: 640px) {
            .ns-announcement-inner {
              gap: 3px 6px;
              padding: 7px 12px;
              font-size: 10px;
              line-height: 1.4;
            }
          }

          @media (max-width: 400px) {
            .ns-announcement-inner {
              font-size: 9px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default AnnouncementBar;